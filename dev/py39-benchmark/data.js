window.BENCHMARK_DATA = {
  "lastUpdate": 1628862886329,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "05e51bdccdc361cf717271c891db70a5f2b2aada",
          "message": "Merge pull request #282 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.4",
          "timestamp": "2021-08-13T13:46:54Z",
          "tree_id": "42539bd0c681f9b8fd4442147169447be092df06"
        },
        "date": 1628862884187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14833.554175046598,
            "unit": "iter/sec",
            "range": "stddev: 0.000034040499549924314",
            "extra": "mean: 67.41472665278202 usec\nrounds: 10858"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4425614.93105057,
            "unit": "iter/sec",
            "range": "stddev: 3.447331725369675e-7",
            "extra": "mean: 225.957299850864 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12902.89928431043,
            "unit": "iter/sec",
            "range": "stddev: 0.00002991935562372445",
            "extra": "mean: 77.50196122324016 usec\nrounds: 7943"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 126525.68207745005,
            "unit": "iter/sec",
            "range": "stddev: 0.000011823758850500433",
            "extra": "mean: 7.903533761532072 usec\nrounds: 43289"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14926.98618676241,
            "unit": "iter/sec",
            "range": "stddev: 0.000026991970625562207",
            "extra": "mean: 66.99275979010571 usec\nrounds: 8197"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4303461.0264226785,
            "unit": "iter/sec",
            "range": "stddev: 3.693547436486606e-7",
            "extra": "mean: 232.3711063862628 nsec\nrounds: 172414"
          }
        ]
      }
    ]
  }
}