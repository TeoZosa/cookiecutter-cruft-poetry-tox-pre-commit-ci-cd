window.BENCHMARK_DATA = {
  "lastUpdate": 1613484943879,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04d81dc356e34cbff90fbc688a14ce1679e2c837",
          "message": "Merge pull request #73 from TeoZosa/dependabot/pip/pylint-2.6.2",
          "timestamp": "2021-02-16T14:11:25Z",
          "tree_id": "ce419fd75de440ca1da93308303b1106db9444cd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/04d81dc356e34cbff90fbc688a14ce1679e2c837"
        },
        "date": 1613484942958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14876.139508771132,
            "unit": "iter/sec",
            "range": "stddev: 0.000023178829228624514",
            "extra": "mean: 67.22174119235635 usec\nrounds: 11495"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4835508.417900685,
            "unit": "iter/sec",
            "range": "stddev: 2.377355623616633e-7",
            "extra": "mean: 206.80348653674133 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13024.846585025882,
            "unit": "iter/sec",
            "range": "stddev: 0.00002441213291440234",
            "extra": "mean: 76.77633617194832 usec\nrounds: 8689"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 182762.53806077086,
            "unit": "iter/sec",
            "range": "stddev: 0.000013835724524247628",
            "extra": "mean: 5.471580831666319 usec\nrounds: 63292"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14687.03634639735,
            "unit": "iter/sec",
            "range": "stddev: 0.000059038734054049675",
            "extra": "mean: 68.08725575499066 usec\nrounds: 14205"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4656929.670576718,
            "unit": "iter/sec",
            "range": "stddev: 4.119902074434711e-7",
            "extra": "mean: 214.73375608818978 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}