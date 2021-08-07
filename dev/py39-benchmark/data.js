window.BENCHMARK_DATA = {
  "lastUpdate": 1628300990462,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "795e1517d335de6ae7fd715e36c13529fb1b7b69",
          "message": ":coffin: Remove unused checkout step in `verify-user-install` job",
          "timestamp": "2021-08-07T01:44:18Z",
          "tree_id": "7369878c278ebb56ffaa75a908c8eeeb1dfb206b"
        },
        "date": 1628300988977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14921.052839216369,
            "unit": "iter/sec",
            "range": "stddev: 0.000009358976325749221",
            "extra": "mean: 67.01939942010945 usec\nrounds: 6204"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5010324.52542083,
            "unit": "iter/sec",
            "range": "stddev: 1.0707700668995333e-8",
            "extra": "mean: 199.58786999276793 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12281.401461324353,
            "unit": "iter/sec",
            "range": "stddev: 0.00001677897519105845",
            "extra": "mean: 81.42393220750282 usec\nrounds: 7582"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152976.74702183335,
            "unit": "iter/sec",
            "range": "stddev: 3.6229891078631024e-7",
            "extra": "mean: 6.536941198372304 usec\nrounds: 48077"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15371.277910928642,
            "unit": "iter/sec",
            "range": "stddev: 0.000009443981426206192",
            "extra": "mean: 65.05639972126338 usec\nrounds: 10765"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4929331.676686552,
            "unit": "iter/sec",
            "range": "stddev: 1.024449632496332e-8",
            "extra": "mean: 202.86725779254078 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}