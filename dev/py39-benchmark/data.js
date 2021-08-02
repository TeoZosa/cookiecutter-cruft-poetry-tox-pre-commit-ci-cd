window.BENCHMARK_DATA = {
  "lastUpdate": 1627868443923,
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
          "id": "3b62ecd7c18dcfffa3b66b0fbdde103e253e4983",
          "message": "Merge pull request #255 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-5f8d373\n\n⬆️ Bump python from `7bc4014` to `5f8d373` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-08-02T01:34:45Z",
          "tree_id": "92f989f6ac670f39d41425c3f516ff33198472a1"
        },
        "date": 1627868441960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14867.12599814035,
            "unit": "iter/sec",
            "range": "stddev: 0.00007582306895284365",
            "extra": "mean: 67.26249579946284 usec\nrounds: 10000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3749324.590020661,
            "unit": "iter/sec",
            "range": "stddev: 3.6535589615492e-7",
            "extra": "mean: 266.71470447267166 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12611.360643999218,
            "unit": "iter/sec",
            "range": "stddev: 0.000018486840991344383",
            "extra": "mean: 79.29358522276686 usec\nrounds: 5116"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120952.11931133435,
            "unit": "iter/sec",
            "range": "stddev: 0.000025774895264035175",
            "extra": "mean: 8.267734419981268 usec\nrounds: 49262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14274.08497609578,
            "unit": "iter/sec",
            "range": "stddev: 0.00007957231689756748",
            "extra": "mean: 70.05703004253222 usec\nrounds: 5825"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4245953.736800246,
            "unit": "iter/sec",
            "range": "stddev: 2.736232182190456e-7",
            "extra": "mean: 235.51834569754487 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}