window.BENCHMARK_DATA = {
  "lastUpdate": 1624890344893,
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
          "id": "940d1a19865f3ba1d32ac30f4fab4cacbe0722f7",
          "message": "Merge pull request #232 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.7",
          "timestamp": "2021-06-28T14:18:44Z",
          "tree_id": "0e78f303c4de95153a609966a4911c6297a001f1"
        },
        "date": 1624890342882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15649.986366770458,
            "unit": "iter/sec",
            "range": "stddev: 0.000049151826786851565",
            "extra": "mean: 63.89781924176594 usec\nrounds: 12005"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3913431.1077126083,
            "unit": "iter/sec",
            "range": "stddev: 7.287269049167784e-7",
            "extra": "mean: 255.53024250987454 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12600.049224110202,
            "unit": "iter/sec",
            "range": "stddev: 0.000015290195018513336",
            "extra": "mean: 79.36476931268643 usec\nrounds: 7508"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121314.91288896679,
            "unit": "iter/sec",
            "range": "stddev: 0.000010486655266071852",
            "extra": "mean: 8.243009669513985 usec\nrounds: 42919"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15646.938663088686,
            "unit": "iter/sec",
            "range": "stddev: 0.000015435142978549597",
            "extra": "mean: 63.91026523028507 usec\nrounds: 9931"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3893632.3807501043,
            "unit": "iter/sec",
            "range": "stddev: 6.255247894826356e-7",
            "extra": "mean: 256.82958795600774 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}