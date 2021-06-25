window.BENCHMARK_DATA = {
  "lastUpdate": 1624579896387,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "15fc1b03c2754c1856d142c463e129f124b165f8",
          "message": "Merge pull request #221 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-8349e05\n\n⬆️ Bump python from `80b238b` to `8349e05` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-06-25T00:04:29Z",
          "tree_id": "c686f78d05fe3811b27d0a15e77c3d78b454890b"
        },
        "date": 1624579894565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15045.686436894344,
            "unit": "iter/sec",
            "range": "stddev: 0.000012538091681034156",
            "extra": "mean: 66.46423240270686 usec\nrounds: 11962"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3846786.2296156,
            "unit": "iter/sec",
            "range": "stddev: 2.3456455493167333e-7",
            "extra": "mean: 259.95725790596117 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12083.347279087586,
            "unit": "iter/sec",
            "range": "stddev: 0.00001922121695382405",
            "extra": "mean: 82.75852517544378 usec\nrounds: 8540"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117349.750128816,
            "unit": "iter/sec",
            "range": "stddev: 0.000021522107716099585",
            "extra": "mean: 8.521534974742512 usec\nrounds: 45247"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15068.33818317608,
            "unit": "iter/sec",
            "range": "stddev: 0.000015484079564959784",
            "extra": "mean: 66.36431886805593 usec\nrounds: 7881"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3738614.1319601685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018075684339928452",
            "extra": "mean: 267.47879420137207 nsec\nrounds: 181819"
          }
        ]
      }
    ]
  }
}